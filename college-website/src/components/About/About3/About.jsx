import React from 'react'

const About = () => {
  return (
    <div>
      <div class=" mx-auto py-12 px-6">
        <div class="bg-white shadow-lg rounded-lg h-full overflow-hidden">
            <div class="flex flex-col md:flex-row">
                <div class=" border rounded m-3 md:w-1/2">
                <iframe className="w-full h-full object-cover" width="560" height="315" src="https://www.youtube.com/embed/l0TTmr1juQg?si=6yVB8pnbycQ3XN0L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    {/* <iframe class="w-full h-full object-cover" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe> */}
                </div>
                <div class="md:w-1/2 p-8">
                    <h2 class="text-2xl font-bold mb-4">About Us</h2>
                    <p class="text-gray-700 mb-4">
                        Driven by a passion for seamless user experiences, we've meticulously curated pagedone to empower creators, designers, and developers alike. Our mission is to provide a comprehensive toolkit, enabling you to build intuitive, beautiful interfaces that resonate with users on every interaction.
                    </p>
                    <p class="text-gray-700 mb-4">
                        Driven by a passion for seamless user experiences, we've meticulously curated pagedone to empower creators, designers, and developers alike. Our mission is to provide a comprehensive toolkit, enabling you to build intuitive, beautiful interfaces that resonate with users on every interaction.
                    </p>
                    <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">Learn more</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
