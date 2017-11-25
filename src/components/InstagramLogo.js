import React from "react"

const InstagramLogo = props => (
  <div>
    <svg width={props.width} height={props.height} viewBox="0 0 97.395 97.395" {...props}>
      <path d="M12.501 0h72.393c6.875 0 12.5 5.09 12.5 12.5v72.395c0 7.41-5.625 12.5-12.5 12.5H12.501C5.624 97.395 0 92.305 0 84.895V12.5C0 5.09 5.624 0 12.501 0zm58.447 10.821a4.395 4.395 0 0 0-4.383 4.385v10.495a4.396 4.396 0 0 0 4.383 4.385h11.008a4.398 4.398 0 0 0 4.385-4.385V15.206a4.397 4.397 0 0 0-4.385-4.385H70.948zm15.439 30.367h-8.572a28.486 28.486 0 0 1 1.25 8.355c0 16.2-13.556 29.332-30.275 29.332-16.718 0-30.272-13.132-30.272-29.332 0-2.904.438-5.708 1.25-8.355h-8.945v41.141a3.884 3.884 0 0 0 3.872 3.872h67.822a3.883 3.883 0 0 0 3.872-3.872V41.188h-.002zM48.789 29.533c-10.802 0-19.56 8.485-19.56 18.953s8.758 18.953 19.56 18.953c10.803 0 19.562-8.485 19.562-18.953s-8.758-18.953-19.562-18.953z" />
    </svg>
    <style jsx>{`
      svg {
        fill: rgba(255,255,255,1);
      }
      svg:hover {
        fill: rgba(0,0,0,0.7);
      }
    `}</style>
  </div>
)

export default InstagramLogo
