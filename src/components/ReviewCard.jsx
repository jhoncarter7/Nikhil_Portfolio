import React from 'react'

const ReviewCard = ({ content, name, imgSrc, company }) => {

  const ratings = new Array(5);
  ratings.fill({
    icon: 'star',
    style: { fontVariationSettings: '"FILL" 1' }
  });
  console.log(ratings)
  return (
    <div className='bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]'>
      <div className="flex items-center gap-1 mb-3 text-yellow-300 text-[18px]">
        {
          ratings.map(({ icon, style }, key) => (
            <span className="material-symbols-rounded"
              key={key}
              style={style}
            >
              {icon}
            </span>
          ))
        }
      </div>
      <p className="text-zinc-400 mb-8">
        {content}
      </p>
      <div className="flex items-center gap-2 mt-auto">
        <figure className='img-box rounded-lg'>
          <img
            src={imgSrc}
            width={44}
            height={44}
            alt=""
            className='img-cover'
          />
        </figure>
        <div className="">
          <p className="">{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard