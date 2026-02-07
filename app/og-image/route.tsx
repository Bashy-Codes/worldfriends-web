import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    flexDirection: 'column',
                }}
            >
                <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
                    WorldFriends
                </div>
                <div style={{ fontSize: 40 }}>
                    Connect Globally, Exchange Cultures
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    )
}
