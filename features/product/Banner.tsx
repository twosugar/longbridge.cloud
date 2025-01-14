import React from 'react'
import { useTranslation } from 'react-i18next'
import { CDN_IMAGES } from '@/constants'
import { TalkToUs } from '../talk-to-us'
interface Props {
  title: string
  desc: string[]
  img: Record<string, string>
}

const Banner: React.FC<Props> = props => {
  const { title, desc, img } = props
  const i18n = useTranslation('common')
  const isEN = i18n.i18n.language === 'en'
  return (
    <div
      className="py-10 bg-cover main-container lg:pt-20 lg:pb-[90px]"
      style={{ backgroundImage: `url('${CDN_IMAGES.banner_bg}')` }}
    >
      <div className="flex flex-col justify-between main-content-width lg:flex-row ">
        {/* 文字 */}
        <div className="flex flex-col items-start lg:w-[550px] mt-10">
          <h1 className="text-[44px] leading-[62px] font-semibold">{title}</h1>
          <div className="mt-5 text-lg font-normal leading-8 text-text_color_1_supplement">
            {desc.map((i, index) => {
              return <div key={index}>{i}</div>
            })}
          </div>
          <TalkToUs className="mt-10" />
        </div>
        {/* 图片 */}
        <div className="lg:w-[620px] lg:h-[430px]">
          <img src={img[i18n.i18n.language] || img['zh-CN']} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner
