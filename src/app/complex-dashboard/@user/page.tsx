import React from 'react'
import { wait } from '@/lib/utils.js'
const User = async () => {
    await wait(3000)
    return (
        <div>User</div>
    )
}

export default User