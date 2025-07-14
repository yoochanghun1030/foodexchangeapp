"use client";

import { useEffect, useState } from 'react';
import axios from '@/utils/axios';
import { useSearchParams } from 'next/navigation';

export default function CreateExchangeInner() {
    const searchParams = useSearchParams();

    const [requesterId, setRequesterId] = useState('');
    const [responderId, setResponderId] = useState('');
    const [requestedItemId, setRequestedItemId] = useState('');
    const [offeredItemId, setOfferedItemId] = useState('');
    const [result, setResult] = useState<string | null>(null);

    useEffect(() => {
        const req = searchParams.get('requesterId');
        const res = searchParams.get('responderId');
        const reqItem = searchParams.get('requestedItemId');
        if (req) setRequesterId(req);
        if (res) setResponderId(res);
        if (reqItem) setRequestedItemId(reqItem);
    }, [searchParams]);

    const handleSubmit = async () => {
        try {
            const r = await axios.post('/exchangerequests', {
                requesterId: Number(requesterId),
                responderId: Number(responderId),
                requestedItemId: Number(requestedItemId),
                offeredItemId: Number(offeredItemId),
            });
            setResult('✅ Success: ' + r.data.exchangeId);
        } catch (e) {
            console.error(e);
            setResult('❌ Error sending request');
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h1>➕ Create Exchange Request</h1>

            <div>
                <label>Requester ID:</label>
                <input value={requesterId} readOnly />
            </div>
            <div>
                <label>Responder ID:</label>
                <input value={responderId} readOnly />
            </div>
            <div>
                <label>Requested Item ID:</label>
                <input value={requestedItemId} readOnly />
            </div>
            <div>
                <label>Offered Item ID:</label>
                <input
                    value={offeredItemId}
                    onChange={e => setOfferedItemId(e.target.value)}
                    placeholder="Enter your item ID"
                />
            </div>

            <button onClick={handleSubmit} style={{ marginTop: '20px' }}>
                Submit
            </button>
            {result && <p style={{ marginTop: '10px' }}>{result}</p>}
        </div>
    );
}
