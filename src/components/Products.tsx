"use client";
import React from "react";
import { Heading } from "./Heading";
import type { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { useTranslation } from "react-i18next";

export const Products = () => {
  const { t } = useTranslation();
  return (
    <Container>

      <div className="flex flex-col items-start justify-start mb-10">
        <span className="text-4xl mb-2">⚡</span>
        <Heading className="font-black text-2xl md:text-3xl text-left">
          {t("what_i_ve_been_working")}
        </Heading>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {products.map((product: Product, idx: number) => (
            <motion.div
              key={`product-${idx}-${product.slug || product.title}`}
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.2, delay: idx * 0.1 }}
            >
              <Link
                href={product.href}
                className="group flex flex-col space-y-4 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-2xl transition duration-200 p-4 h-full border border-transparent hover:border-gray-100 dark:hover:border-neutral-800"
              >
                <div className="relative w-full h-64 overflow-hidden rounded-xl bg-gray-100 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 p-4">
                  <Image
                    src={product.thumbnail}
                    alt="thumbnail"
                    fill
                    className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                    quality={90}
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <Heading
                      as="h4"
                      className="font-black text-lg md:text-lg lg:text-xl "
                    >
                      {product.title}
                    </Heading>
                    <Paragraph className="text-sm md:text-sm lg:text-base mt-2">
                      {t(product.description)}
                    </Paragraph>
                  </div>
                  <div className="flex flex-wrap gap-2 md:mb-1 mt-2 md:mt-2">
                    {product.stack?.map((stack: string) => (
                      <span
                        key={stack}
                        className="text-xs md:text-xs lg:text-xs bg-gray-50 dark:bg-neutral-800 px-2 py-1 rounded-sm text-secondary-foreground"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>

  );
};
