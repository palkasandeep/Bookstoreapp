import React from 'react'
//we have to show all the data from the list.json right  for that import the 
//list .json file
import Cards from './Cards';
import list from '../../public/list.json'
import { Link } from 'react-router-dom';
function Course() {
  console.log(list);
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl  md:text-4xl'>We're delighted to have you Here!:)</h1>
          <p>Cultural and Historical Insights
            Understanding Indian Culture:

            The Mahabharata is a cornerstone of Indian culture, offering deep insights into the traditions, values, and societal norms of ancient India.
            Historical Context:

            It provides a glimpse into the history and mythology of India, helping readers understand the country's ancient past and the evolution of its civilization.
            Philosophical and Ethical Lessons
            Moral and Ethical Guidance:

            The epic explores complex moral dilemmas and ethical questions, providing valuable lessons on righteousness (dharma), duty, and justice.
            Philosophical Depth:

            The Bhagavad Gita, a part of the Mahabharata, is a profound philosophical text that discusses various paths to spiritual liberation and the nature of life and existence.
            Character Studies and Human Nature
            Complex Characters:

            The Mahabharata features a wide array of complex characters, each with their own strengths, weaknesses, and motivations. Studying these characters can offer insights into human nature and behavior.
            Exploration of Human Emotions:

            The epic delves into various human emotions such as love, jealousy, hatred, and loyalty, providing a rich tapestry of the human experience.
            Literary and Aesthetic Appreciation</p>
          <Link to="/">
            <button className='bg-yellow-500 text-white px-4 py-2 rounded-md mt-3 hover:bg-yellow-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
