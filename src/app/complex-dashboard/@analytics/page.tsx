import { wait } from '@/lib/utils'
import React from 'react'

const Analytics = async () => {
    await wait(4000)
    return (
        <div>Analytics</div>
    )
}

export default Analytics