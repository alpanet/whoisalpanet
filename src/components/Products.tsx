"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
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
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-4 h-12 text-2xl">
        {t("what_i_ve_been_working")}
      </Heading>

      <div>
        <div className="grid grid-cols-1  gap-10">
          {products.map((product: Product, idx: number) => (
            <motion.div
              key={product.href}
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
                key={product.href}
                className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4 items-center"
              >
                <Image
                  src={product.thumbnail}
                  alt="thumbnail"
                  height="200"
                  width="200"
                  className="rounded-md object-scale-down"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <Heading
                      as="h4"
                      className="font-black text-lg md:text-lg lg:text-xl "
                    >
                      {product.title}
                    </Heading>
                    <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                      {t(product.description)}
                    </Paragraph>
                  </div>
                  <div className="flex flex-wrap gap-2 md:mb-1 mt-2 md:mt-2">
                    {product.stack?.map((stack: string) => (
                      <span
                        key={stack}
                        className="text-xs  md:text-xs lg:text-xs bg-blue-100 px-2 py-1 rounded-sm text-gray-600"
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
