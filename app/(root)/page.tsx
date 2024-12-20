// import { Button } from '@/components/ui/button'
// import React from 'react'
// Test
// export default function Home() {
//   return (
//     <div>
//       <h1>Hello World</h1>

//       <button className="bg-red-300">버튼</button>
//       {/* 위 코드는 매우 길어져 복잡함. 그래서 shdcn에서 설치한 components의 버튼을 사용함. */}
//       <br />
//       <Button>버튼</Button>
//       <br />
//       <Button variant={'destructive'}>Button-Destructive</Button>
//       {/* destructive는 빨간색 버튼 */}
//       <Button variant={'destructive'} size={'lg'}>
//         Button-Destructive
//       </Button>
//       <br />

//       {/* <Button variant={'default1'}>Button</Button> */}
//       <Button variant={'secondary'} size={'sm'}>
//         Button-secondary-sm
//       </Button>
//     </div>
//   )
// }

// import ProductList from '@/components/shared/product/product-list'
// import ProductList from '@/components/shared/product/product-list'
// import { getLatestProducts } from '@/lib/actions/product.actions'
// import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: `${APP_NAME} - ${APP_DESCRIPTION}`,
// }

// export default async function Home() {
//   const latestProducts = await getLatestProducts()
//   return (
//     <div>
//       <ProductList title="Newest Arrivals" data={latestProducts} />
//     </div>
//   )
// }

import ProductList from '@/components/shared/product/product-list'
import { getLatestProducts } from '@/lib/actions/product.actions'
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
  title: `${APP_NAME} - ${APP_DESCRIPTION}`,
}

export default async function Home() {
  const latestProducts = await getLatestProducts()
  return (
    <div className="space-y-8">
      <ProductList title="Newest Arrivals" data={latestProducts} />
    </div>
  )
}
