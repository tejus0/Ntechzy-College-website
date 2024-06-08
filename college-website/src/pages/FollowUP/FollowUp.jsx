import React, { useState } from 'react'

const FollowUp = () => {
    const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState('');
  const [postedBy, setPostedBy] = useState('');

  const handleAddNote = () => {
    const date = new Date().toLocaleDateString();
    const newNote = { subject, postedBy, date };
    setNotes([...notes, newNote]);
    setSubject('');
    setPostedBy('');
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-4/5 bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-xl font-semibold">Follow Up & Notes</h1>
          <div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
              onClick={() => setShowModal(true)}
            >
              Add Note
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Add Follow Up
            </button>
          </div>
        </div>
        <div className="mt-4">
          {notes.length === 0 ? (
            <p>You have no follow-ups and Remarks for Shubham Bhatt</p>
          ) : (
            notes.map((note, index) => (
              <div key={index} className="border p-4 rounded-lg mb-4 bg-gray-50">
                <h3 className="text-lg font-bold">{note.subject}</h3>
                <p>Posted on: {note.date}</p>
                <p>Posted By: {note.postedBy}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <span
              className="float-right text-gray-500 cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <h2 className="text-xl font-semibold mb-4">Add Note</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddNote();
              }}
            >
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="posted-by" className="block text-gray-700">
                  Posted By:
                </label>
                <input
                  type="text"
                  id="posted-by"
                  value={postedBy}
                  onChange={(e) => setPostedBy(e.target.value)}
                  className="mt-1 p-2 border rounded w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Add Note
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FollowUp