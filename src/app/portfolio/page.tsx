"use client"

import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// ポートフォリオのサンプルデータ
const portfolioData = [
  {
    id: 1,
    name: "山田 太郎",
    role: "プログラマー / ゲーム開発者",
    year: 3,
    department: "情報工学科",
    skills: ["C++", "Unity", "Unreal Engine", "Python", "JavaScript"],
    projects: [
      {
        title: "3Dアクションゲーム「Crystal Hunter」",
        description: "Unreal Engineを使用した3Dアクションゲーム。物理ベースのアクションと美しいグラフィックが特徴。",
        image: "https://placekitten.com/800/450",
        tags: ["ゲーム", "Unreal Engine", "C++"]
      },
      {
        title: "学内イベント管理システム",
        description: "学内のイベント情報を管理・共有するためのWebアプリケーション。",
        image: "https://placekitten.com/801/450",
        tags: ["Web", "React", "Node.js"]
      }
    ],
    about: "ゲーム開発とWebアプリケーション開発に情熱を持つ3年生。特にUnreal Engineを使った3Dゲーム開発に力を入れています。将来はゲーム会社でのプログラマーを目指しています。",
    socialLinks: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      portfolio: "https://example.com"
    }
  },
  {
    id: 2,
    name: "佐藤 花子",
    role: "イラストレーター / UI/UXデザイナー",
    year: 2,
    department: "情報メディア学科",
    skills: ["Photoshop", "Illustrator", "Figma", "Procreate", "HTML/CSS"],
    projects: [
      {
        title: "キャラクターデザインコレクション",
        description: "オリジナルキャラクターのデザインとイラスト集。ゲームやアニメーション向けのキャラクター設定も含む。",
        image: "https://placekitten.com/802/450",
        tags: ["イラスト", "キャラクターデザイン", "コンセプトアート"]
      },
      {
        title: "モバイルアプリUI設計",
        description: "学生向け時間管理アプリのUIデザインとプロトタイプ作成。",
        image: "https://placekitten.com/803/450",
        tags: ["UI/UX", "Figma", "モバイルアプリ"]
      }
    ],
    about: "デジタルイラストとUI/UXデザインを専門とする2年生。キャラクターデザインとユーザー体験の向上に情熱を注いでいます。将来はゲーム業界やアプリ開発企業でのデザイナーを目指しています。",
    socialLinks: {
      instagram: "https://instagram.com",
      artstation: "https://artstation.com",
      behance: "https://behance.net"
    }
  },
  {
    id: 3,
    name: "鈴木 健太",
    role: "音楽作曲家 / サウンドデザイナー",
    year: 4,
    department: "情報工学科",
    skills: ["Logic Pro", "Ableton Live", "FMOD", "Wwise", "Max/MSP"],
    projects: [
      {
        title: "ゲームサウンドトラック「Echo of Memories」",
        description: "オリジナルゲーム向けに作曲したサウンドトラック。環境音やエフェクト音も含む総合的なサウンドデザイン。",
        image: "https://placekitten.com/804/450",
        tags: ["音楽", "サウンドデザイン", "ゲームオーディオ"]
      },
      {
        title: "インタラクティブオーディオシステム",
        description: "プレイヤーの行動に応じて変化する適応型音楽システムの開発。",
        image: "https://placekitten.com/805/450",
        tags: ["インタラクティブオーディオ", "FMOD", "C#"]
      }
    ],
    about: "ゲーム音楽とインタラクティブオーディオを専門とする4年生。プログラミングの知識を活かした革新的なサウンドシステムの開発に取り組んでいます。卒業後はゲーム業界でのサウンドデザイナーを目指しています。",
    socialLinks: {
      soundcloud: "https://soundcloud.com",
      youtube: "https://youtube.com",
      bandcamp: "https://bandcamp.com"
    }
  }
];

export default function PortfolioPage() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  
  const handleMemberClick = (id: number) => {
    setSelectedMember(id === selectedMember ? null : id);
  };
  
  const selectedMemberData = selectedMember !== null 
    ? portfolioData.find(member => member.id === selectedMember) 
    : null;
  
  return (
    <PageLayout>
      {/* ヘッダーセクション */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 dark:from-purple-800 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              部員ポートフォリオ
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              コンピュータ研究部の部員たちの作品や活動をご紹介します。<br />
              各部員の個性豊かな制作物をぜひご覧ください。
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((member) => (
              <div 
                key={member.id}
                className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer ${
                  selectedMember === member.id ? 'ring-2 ring-indigo-500 dark:ring-indigo-400' : ''
                }`}
                onClick={() => handleMemberClick(member.id)}
              >
                <div className="relative h-48 w-full bg-gradient-to-r from-indigo-500 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl">👤</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h2>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{member.department} {member.year}年</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.slice(0, 3).map((skill, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{member.about}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 選択された部員の詳細表示 */}
      {selectedMemberData && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="md:w-1/3">
                    <div className="relative h-64 w-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl">👤</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedMemberData.name}</h2>
                      <p className="text-indigo-600 dark:text-indigo-400 mb-2">{selectedMemberData.role}</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedMemberData.department} {selectedMemberData.year}年</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedMemberData.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {Object.entries(selectedMemberData.socialLinks).map(([platform, url], index) => (
                          <a 
                            key={index}
                            href={url as string} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                          >
                            <span className="sr-only">{platform}</span>
                            {platform === 'github' && (
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                              </svg>
                            )}
                            {platform === 'twitter' && (
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            )}
                            {platform === 'instagram' && (
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                              </svg>
                            )}
                            {platform === 'youtube' && (
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                              </svg>
                            )}
                            {platform === 'soundcloud' && (
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623c0-.075-.06-.135-.135-.135l-.031-.017zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914c-.105 0-.195.09-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c.014.119.104.225.225.225.119 0 .225-.105.225-.225l.195-2.52-.196-5.275c0-.12-.105-.225-.225-.225m1.245.045c0-.135-.105-.24-.24-.24-.119 0-.24.105-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24.12 0 .24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134c-.135 0-.255.119-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.105.255-.255l.15-2.473-.15-5.307c0-.148-.12-.254-.271-.254l.016-.015zm.749-.15c-.15 0-.27.12-.27.27l-.119 5.322.12 2.458c0 .149.12.27.269.27.15 0 .27-.12.27-.27l.119-2.458-.12-5.307c.016-.149-.12-.27-.27-.27zm.989.104c-.164 0-.284.135-.284.285l-.103 5.143.104 2.458c0 .165.119.285.284.285.149 0 .284-.12.284-.285l.119-2.458-.119-5.143c0-.15-.15-.285-.285-.285zm1.049-.09c-.18 0-.314.149-.314.315l-.09 5.057.089 2.458c0 .18.135.314.315.314.164 0 .314-.135.314-.314l.09-2.458-.09-5.057c0-.18-.135-.314-.314-.314zm.958-.03c-.196 0-.345.149-.345.346l-.074 4.977.074 2.458c0 .195.149.345.345.345.195 0 .345-.149.345-.345l.075-2.458-.075-4.977c0-.196-.15-.345-.345-.345zm.989-.016c-.21 0-.375.165-.375.375l-.06 4.962.06 2.458c0 .21.165.375.375.375.225 0 .375-.166.375-.375l.074-2.458-.074-4.962c0-.21-.165-.375-.375-.375zm1.185.045c0-.227-.179-.405-.405-.405-.225 0-.405.178-.405.405l-.045 4.918.045 2.458c0 .226.18.404.405.404.226 0 .405-.178.405-.404l.045-2.458-.045-4.918zm.479-.76c-.225 0-.405.18-.405.405l-.045 5.678.045 2.458c0 .226.18.404.405.404.225 0 .404-.178.404-.404l.045-2.458-.045-5.678c0-.226-.179-.405-.404-.405zm5.973 2.872c-.598 0-1.154.253-1.559.662l-.03-8.163c0-.314-.239-.569-.54-.569-.314 0-.554.255-.554.569l-.015 10.33c0 .314.24.575.554.575.314 0 .554-.255.554-.569v-1.044c.404.42.96.674 1.574.674 1.214 0 2.228-.959 2.228-2.234 0-1.275-.989-2.238-2.213-2.238l.015.007z" />
                              </svg>
                            )}
                            {platform === 'portfolio' && (
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                            )}
                            {platform === 'artstation' && (
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M1.77 16.88l1.73 2.98c.34.68 1.04 1.14 1.83 1.14h15.66l-3.35-5.87-15.87 1.75zM20.16 17.54L9.7 6.57c-.37-.38-.88-.57-1.4-.57H5.27c-.67 0-1.3.33-1.7.88L0 14.03l20.16 3.51zM23.02 18.13c.37-.65.38-1.45.02-2.1l-3.38-5.83-5.88 10.23h7.08c.86 0 1.68-.5 2.16-1.3z" />
                              </svg>
                            )}
                            {platform === 'behance' && (
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M7.443 5.35c.639 0 1.23.05 1.77.198.513.148.957.395 1.33.692.355.297.639.693.847 1.188.197.494.296 1.09.296 1.73 0 .742-.148 1.385-.493 1.878-.296.494-.79.939-1.43 1.287.87.296 1.483.791 1.878 1.483.394.692.64 1.53.64 2.47 0 .79-.148 1.483-.444 2.076-.296.594-.691 1.09-1.186 1.434-.494.346-1.09.642-1.73.79-.642.148-1.335.247-2.028.247H1V5.35h6.443zm-.345 5.64c.543 0 .987-.148 1.33-.395.345-.247.494-.692.494-1.286 0-.345-.05-.642-.197-.89-.099-.197-.296-.395-.494-.494-.197-.1-.444-.197-.691-.247-.247 0-.543-.05-.839-.05H3.87v3.363h3.228zm.197 5.937c.346 0 .642-.05.938-.098.296-.05.543-.197.79-.346.246-.148.394-.346.543-.642.148-.297.197-.642.197-1.09 0-.89-.246-1.53-.74-1.878-.493-.345-1.135-.543-1.878-.543H3.87v4.596h3.425zm8.925-4.794c.494.494.839 1.09 1.038 1.78h-5.147c.05-.692.345-1.286.79-1.73.444-.444.987-.642 1.68-.642.74 0 1.285.197 1.78.642l-.14-.05zm.642-4.003c-.444-.395-.987-.642-1.68-.642-.346 0-.691.05-.987.197-.297.148-.494.297-.692.494-.197.197-.345.444-.444.691-.099.247-.148.494-.197.79h4.695c-.148-.89-.345-1.138-.79-1.582l.098.05zm-1.78-2.766c.79 0 1.483.099 2.126.346.642.247 1.19.593 1.632 1.038.444.444.79.987 1.038 1.582.247.594.395 1.236.444 1.928.05.444.05.938.05 1.433 0 .494-.05.938-.05 1.335H14.77c0 .89.345 1.532.889 1.927.543.395 1.187.593 1.928.593.593 0 1.137-.148 1.582-.395.444-.247.74-.593.987-.987h2.72c-.444 1.335-1.088 2.274-1.977 2.868-.889.593-1.977.89-3.265.89-.889 0-1.68-.148-2.422-.444-.741-.297-1.385-.692-1.928-1.236a5.031 5.031 0 0 1-1.236-1.927c-.296-.741-.444-1.532-.444-2.422 0-.889.148-1.73.444-2.47.296-.742.74-1.384 1.236-1.928.494-.543 1.137-.987 1.828-1.285.692-.297 1.483-.445 2.274-.445zm-4.892.691v9.635h-2.719V5.055h2.719z" />
                              </svg>
                            )}
                            {platform === 'bandcamp' && (
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
                              </svg>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">自己紹介</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">{selectedMemberData.about}</p>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">プロジェクト</h3>
                    <div className="space-y-8">
                      {selectedMemberData.projects.map((project, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                          <div className="relative h-64 w-full">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, tagIndex) => (
                                <span 
                                  key={tagIndex}
                                  className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 参加募集セクション */}
      <section className="py-16 bg-indigo-50 dark:bg-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              あなたもポートフォリオを作ってみませんか？
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              コン研では、部員一人ひとりの個性と才能を大切にしています。<br />
              あなたの作品を世界に発信するお手伝いをします。
            </p>
          </div>
          <div className="flex justify-center">
            <Link 
              href="/about#join" 
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
            >
              入部方法を見る
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
