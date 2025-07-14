// frontend/app/review/create/page.tsx
"use client";
export const dynamic = "force-dynamic";

import React, { Suspense } from 'react'
import dynamicImport from 'next/dynamic'

const CreateReviewInner = dynamicImport(
    () => import('./CreateReviewInner'),
    { ssr: false }
)

export default function CreateReviewPage() {
    return (
        <Suspense fallback={<p>Loading…</p>}>
            <CreateReviewInner />
        </Suspense>
    )
}
