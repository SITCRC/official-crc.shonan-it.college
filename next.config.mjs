import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 画像の最適化設定
  images: {
    domains: ['placekitten.com'], // 仮の画像ドメイン（後で実際のドメインに変更）
  },
  // GitHub Pagesでのデプロイ設定
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/official-crc.shonan-it.college' : '',
  trailingSlash: true,
};

// MDXの設定
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
