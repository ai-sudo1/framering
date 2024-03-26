import { BASE_URL, POST_URL } from '@/constants/constants';

export function generateFrameRing(imagePath: string) {
  const fullImageUrl = `${BASE_URL}${imagePath}`;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${fullImageUrl}" />
      <meta property="fc:frame:post_url" content="${POST_URL}" />
      <meta property="fc:frame:button:1" content="Next FrameRing FramePage" />
      <meta property="of:accepts:xmtp" content="2024-02-01" />
    </head>
    <body>
      
    </body>
    </html>
  `;
}