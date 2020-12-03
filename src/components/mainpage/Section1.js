import React, { forwardRef } from 'react'
import mainImg from 'assets/images/HandinHand_full_illustration.png'
import titleImg from 'assets/images/HandinHandChallenge-title.png'
import './section.css'

const AnchorBtns = ({ topics, refs, onClick }) => {
  return (
    <div className={'my-24 flex flex-row justify-center items-center'}>
      {topics.map((topic, idx) => (
        <div className={'nav-btn hover-btn rounded-full text-white text-lg py-6 px-12 mx-3'} onClick={() => onClick(refs[idx])}>
          {topic}
        </div>
      ))}
    </div>
  )
}

const Section1 = forwardRef((props, ref) => {
  const { onClick, refs } = props
  const topics = ['챌린지 개요', '챌린지 주제', '참가 대상', '대회 일정', '시상 내역']
  return (
    <>
      <div className={'container mx-auto pt-20 pb-16 max-w-screen-xl flex flex-row flex-nowrap justify-between items-center'} ref={ref}>
        <img src={mainImg} alt={'main'} style={{ width: 700, marginLeft: '-30px' }} />
        <div className={'flex flex-col flex-nowrap items-end mr-16'}>
          <img src={titleImg} alt={'title'} />
          <div className={'mt-8 text-right font-bold text-lg'}>
            <p>수어(手語/Sign language) 데이터를 활용한 </p>
            <p>베리어프리 서비스 디자인 챌린지</p>
            <p className={'text-xl font-normal mt-2'}>
              총상금{' '}
              <em style={{ color: '#48beef' }} className={'not-italic font-bold'}>
                900만원
              </em>
              (총 3팀)
            </p>
          </div>
          <button
            className={'hover-btn mt-4 px-4 py-4 border-solid border-2 border-gray-800 rounded-full focus:outline-none'}
            onClick={() => window.open('https://bit.ly/hihc2020')}
          >
            참가의향서 접수하기
          </button>
        </div>
      </div>
      <AnchorBtns topics={topics} refs={refs} onClick={onClick} />
    </>
  )
})

export default Section1
