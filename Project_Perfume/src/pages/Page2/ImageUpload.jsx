import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-[#8B5A2B] mb-4">Upload Your Custom Image</h2>
      <div className="flex flex-col items-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        {image && (
          <div className="w-48 h-48 mb-4">
            <img src={image} alt="Uploaded Preview" className="w-full h-full object-cover rounded-lg" />
          </div>
        )}
        <p className="text-gray-600 text-center">
          Upload an image to customize your perfume bottle or profile. Supported formats: JPG, PNG.
        </p>
      </div>
    </section>
  );
};

export default ImageUpload;