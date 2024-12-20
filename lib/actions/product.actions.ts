'use server'

export async function getProductBySlug(slug: string) {
  return await db.query.products.findFirst({
    where: eq(products.slug, slug),
  })
}
import { desc, eq } from 'drizzle-orm'

import db from '@/db/drizzle'
import { products } from '@/db/schema'

export async function getLatestProducts() {
  const data = await db.query.products.findMany({
    orderBy: [desc(products.createdAt)],
    limit: 4, //몇 개의 데이터만 불러올지라는 그런 의미!
  })
  return data
}
