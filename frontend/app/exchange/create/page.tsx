"use client";
export const dynamic = "force-dynamic";

import React, { Suspense } from 'react';
import dynamicImport from 'next/dynamic';

const CreateExchangeInner = dynamicImport(
    () => import('./CreateExchangeInner'),
    { ssr: false }
);

export default function CreateExchangePage() {
    return (
        <Suspense fallback={<p>Loading…</p>}>
            <CreateExchangeInner />
        </Suspense>
    );
}
