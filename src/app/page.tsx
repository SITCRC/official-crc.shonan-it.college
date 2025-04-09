"use client"

import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <PageLayout>
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                湘南工科大学<br />コンピュータ研究部
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                プログラミング、ゲーム制作、イラスト、音楽など<br />
                多様な創作活動を行う大学公認の部活動です
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/about" 
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
                >
                  詳しく見る
                </Link>
                <Link 
                  href="/portfolio" 
                  className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                >
                  ポートフォリオ
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://placekitten.com/800/600"
                  alt="コンピュータ研究部の活動風景"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* 活動内容セクション */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            多様な活動内容
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "プログラミング",
                description: "Webアプリ、ゲーム、ツール開発など様々なプログラミングを学び、実践します。",
                icon: "💻"
              },
              {
                title: "ゲーム制作",
                description: "企画から開発、テストまで、オリジナルゲームの制作に取り組みます。",
                icon: "🎮"
              },
              {
                title: "イラスト・デザイン",
                description: "デジタルイラストやUIデザインなど、視覚的な創作活動を行います。",
                icon: "🎨"
              },
              {
                title: "音楽・MIDI",
                description: "DTMやMIDI制作を通じて、音楽制作の技術を磨きます。",
                icon: "🎵"
              },
              {
                title: "3Dモデリング",
                description: "3DCGモデルの制作やアニメーション技術を学びます。",
                icon: "🧊"
              },
              {
                title: "技術研究",
                description: "最新技術の調査や研究、勉強会を通じて知識を深めます。",
                icon: "🔬"
              }
            ].map((activity, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{activity.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新ニュースセクション */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              最新ニュース
            </h2>
            <Link 
              href="/news" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "2025年度新入部員募集中！",
                date: "2025年4月5日",
                excerpt: "新年度が始まり、新入部員を募集しています。プログラミングやゲーム制作に興味のある方、ぜひ見学にお越しください。",
                image: "https://placekitten.com/600/400"
              },
              {
                title: "春季ゲーム制作ワークショップ開催",
                date: "2025年3月20日",
                excerpt: "春休み期間中、3日間のゲーム制作ワークショップを開催しました。初心者から上級者まで、多くの参加者が集まりました。",
                image: "https://placekitten.com/601/400"
              },
              {
                title: "技術発表会を実施しました",
                date: "2025年2月15日",
                excerpt: "年度末の技術発表会を実施し、各チームが1年間の成果を発表しました。外部からの参加者も多数お越しいただきました。",
                image: "https://placekitten.com/602/400"
              }
            ].map((news, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{news.date}</p>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{news.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{news.excerpt}</p>
                  <Link 
                    href={`/news/${index + 1}`} 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    続きを読む →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 制作物ギャラリーセクション */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              制作物ギャラリー
            </h2>
            <Link 
              href="/works" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="relative group">
                <div className="relative h-48 w-full rounded-lg overflow-hidden">
                  <Image
                    src={`https://placekitten.com/${600 + index}/${400 + index}`}
                    alt={`制作物サンプル ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">詳細を見る</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 入部案内セクション */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              コン研に入部しませんか？
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              プログラミング初心者でも大歓迎！<br />
              先輩たちがしっかりサポートします。
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1 p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">入部案内</h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">活動日: 毎週月・水・金 16:30〜19:00</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">場所: 7号館3階 コンピュータ研究部室</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">入部費: 年間5,000円（機材・イベント費用）</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">必要なもの: やる気と好奇心（PCは部室にあります）</span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Link 
                    href="/about#join" 
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    入部方法を見る
                  </Link>
                </div>
              </div>
              <div className="md:flex-1 relative">
                <div className="h-64 md:h-full w-full">
                  <Image
                    src="https://placekitten.com/800/500"
                    alt="部室の様子"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
