import React from 'react'

import './ProjectCard.css'
import { Link } from 'react-router-dom';

function ProjectCard({ projectDetails }) {
    const { title, image, tags } = projectDetails;
  return (
    <Link to={'#'} className='ProjectCardContainer'>
        {image === '' ? <div className='ProjectCardImage'>{title}</div> : 
                <image className='ProjectCardImage' src={image} alt={title} />
        }
        <div className='ProjectCardDetails'>
            <div className='ProjectCardTitle'>{title}</div>
            <div className='ProjectCardTags'>
                {tags.map((tag) => (
                    <div className='ProjectCardTag' key={tag}>{tag}</div>
                ))}
            </div>
        </div>
    </Link>
  )
}

export default ProjectCard