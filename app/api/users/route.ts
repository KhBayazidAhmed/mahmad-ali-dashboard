import { NextResponse } from 'next/server'

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', balance: 1000 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', balance: 1500 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', balance: 750 },
]

export async function GET() {
  return NextResponse.json(users)
}

