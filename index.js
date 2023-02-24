#!/usr/bin/env node
const { ethers } = require('ethers');

const unlockAccount = async (address, providerUrl) => {
    const provider = await new ethers.JsonRpcProvider(providerUrl || 'http://127.0.0.1:8545');
    try {
        await provider.send('evm_addAccount', [address, '']);
        await provider.send('personal_unlockAccount', [address, '']);
        console.log(`Account ${address} unlocked`);
    } catch (error) {
        console.error(error);
    }
}

if (process.argv.length > 2 && ethers.isAddress(process.argv[2])) unlockAccount(process.argv[2], process.argv[3]);