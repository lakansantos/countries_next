'use client';
import React, {useState} from 'react';

const Page = () => {
  const [image, setImage] = useState<ImageData | null>(null);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement | null>
  ) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch(
          'http://localhost:3000/api/v1/upload-image',
          {
            method: 'POST',
            body: formData,
          }
        );

        const {data} = response.ok ? await response.json() : null;

        setImage(data);
        console.log(data);
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('An error occurred while uploading the image. Please try again.');
      }
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!title || !image || !message) {
      alert('Please provide a title and select an image.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/v1/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl9pZCI6IjY2NGU3MGU4NDRmYTkwOTgwZmIzNGIyNCIsImlhdCI6MTcxNjgwNjA2OX0.5Zh78fhyokEoVPGoHmT5e9q1a1hnM-zMtuxtaG3ss7g',
        },
        body: JSON.stringify({title, image, message}),
      });

      const data = await response.json();
      console.log(data);
      // Reset form fields
      setTitle('');
      setImage(null);
    } catch (error) {
      console.error('Error creating post:', error);
      alert('An error occurred while creating the post. Please try again.');
    }
  };
  console.log(image);
  console.log(title);
  console.log(title);
  console.log(message);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;
