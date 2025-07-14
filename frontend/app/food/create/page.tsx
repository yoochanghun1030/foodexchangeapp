// app/food/create/page.tsx
"use client";

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

const CreateFoodInner = dynamic(
    () => import('./CreateFoodInner'),
    { ssr: false }
)

export default function CreateFoodPage() {
    return (
        <Suspense fallback={<p>Loading…</p>}>
            <CreateFoodInner />
        </Suspense>
    )
}
