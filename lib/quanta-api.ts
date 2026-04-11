export const RPC_URL = "https://rpc.quantachain.org";

export interface Block {
  index: number;
  timestamp: number;
  transactions: { sender: string; recipient: string; amount: number; fee: number; nonce: number; signature: string; public_key: string }[];
  nonce: number;
  previous_hash: string;
  hash: string;
  difficulty: number;
}

export interface NetworkStats {
  chain_length: number;
  total_transactions: number;
  current_difficulty: number;
  mining_reward: number;
  total_supply: number;
  pending_transactions: number;
}

export async function getNetworkStats(): Promise<NetworkStats | null> {
  try {
    const res = await fetch(`${RPC_URL}/api/stats`, {
      next: { revalidate: 30 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getLatestBlocks(count = 3): Promise<Block[]> {
  try {
    const res = await fetch(`${RPC_URL}/api/blocks/latest?count=${count}`, {
      next: { revalidate: 30 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.blocks ?? [];
  } catch {
    return [];
  }
}
