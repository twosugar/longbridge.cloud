import { FC } from 'react'
import { FirstScreen, IFirstScreenProps } from '@/features/home/first-screen'
import Footer from '@/features/footer'

export const PageLayout: FC<{
  screenProps: IFirstScreenProps
}> = ({
  screenProps,
  children
}) => {
  return <div>
    {/* 放在这里一是因为它和 header 绑定了，二是可以后面方便控制吸顶效果 */}
    <FirstScreen {...screenProps}/>
    {children}
    <Footer />
  </div>
}