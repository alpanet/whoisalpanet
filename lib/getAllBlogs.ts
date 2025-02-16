import glob from "fast-glob";
import * as path from "path";

async function importBlog(blogFileNames: string) {
  // Dosya yolunu project root'tan göreceli olarak çözümle
  const filePath = path.join("src/app/blog", blogFileNames);  // Burada process.cwd() kullanmıyoruz çünkü Next.js, relative path'leri çözümlemede sorun yaşayabilir
  let { meta, default: component } = await import(`../${filePath}`);  // Dosya yolunun '../' ile göreceli olarak çözülmesi gerekiyor
  return {
    slug: blogFileNames.replace(/(\/content)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getAllBlogs() {
  // Dosya adlarını belirlemek için `glob` kullanıyoruz
  const blogFileNames = await glob(["*.mdx", "*/content.mdx"], {
    cwd: path.join(process.cwd(), "src/app/blog"),  // Burada da project root'undan başlıyoruz
  });

  // Tüm blog dosyalarını import edin
  const blogs = await Promise.all(blogFileNames.map(importBlog));

  // Blogları tarihe göre sıralayın
  return blogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}
