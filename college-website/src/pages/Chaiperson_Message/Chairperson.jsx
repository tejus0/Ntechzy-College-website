import React from 'react'
import chairpersonImage from "../../assets/chairperson/AboutImage.jpg"

const Chairperson = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="md:flex">
          <div className="md:w-2/3 p-8">
            <h1 className="text-2xl font-bold mb-4">Chairman Message</h1>
            <p className="mb-4">Welcome to the GS Medical College & Hospital! The Journey begins…</p>
            <p className="mb-4">
              My idea of education is to teach in the best way. I invite all of you to be a part of this journey.
              I welcome all of you to join us to grow together, learn together and evolve together.
            </p>
            <p className="mb-4">
              In order to achieve excellence and competitive edge, I extremely take care for the need to provide
              not only good but also exceptional, scholastic and practical curriculum to our budding professionals.
            </p>
            <p className="mb-4">
              GS Medical College & Hospital, a venture of Shri Jaipal Singh Sharma Trust, leads a dedicated team
              of learners and educators towards creating new landmark in the field of Medical, to provide immense
              opportunity in the field of research work in medicinal plants and to provide best and authentic
              healthcare to our society.
            </p>
            <p className="mb-4">
              Shri Jaipal Singh Sharma Trust made and executed on 22 October 2013, by Shri Ganga Saran Sharma in
              the memories of his father Late. Shri Jaipal Singh Sharma, as a nonprofit organization with the help
              of a group of dedicated, generous and enterprising men to commence an ambitious program in the field
              of medical and nursing education.
            </p>
            <p className="mb-4">
              It was instituted with the aim to co-operate, promote and render assistance to organizations,
              institutions for a better and mutual comprehension and help them in our/their growth and stability
              and to run, maintain or assist any medical institution, nursing homes or clinics or to grant
              assistance to needy persons so that they can get medical services in a best possible way.
            </p>
          </div>
          <div className="md:w-1/3 flex items-center justify-center p-8">
            <div className="relative">
              <img src={chairpersonImage} alt="Chairperson" className="rounded-lg shadow-lg"/>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-lg" style={{ borderTopWidth: '6px', borderBottomWidth: '6px' }}></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-lg" style={{ borderRightWidth: '6px', borderLeftWidth: '6px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Chairperson;