import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const response = await fetch('https://www.igray24back.ru/steam/send_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('Steam API Proxy Error:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
