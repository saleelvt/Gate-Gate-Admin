import React, { useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';

const FormLayout: React.FC = () => {
  const [service, setService] = useState<string>('');
  const [subService, setSubService] = useState<string>('');
  const [game, setGame] = useState<string>('');
  const [image, setImage] = useState<File | null>(null); // For storing the selected image
  const [imagePreview, setImagePreview] = useState<string | null>(null); // For displaying the preview
  const [errors, setErrors] = useState({
    service: '',
    subService: '',
    game: '',
    image: '', // Error for image upload
  });

  

  const handleSubmitService = (event: React.FormEvent) => {



    event.preventDefault();
    let hasError = false;
    const newErrors = { service: '', subService: '', game: '', image: '' };

    if (!service) {
      newErrors.service = 'Service is required';
      hasError = true;
    }
    if (!subService) {
      newErrors.subService = 'Sub Service is required';
      hasError = true;
    }
    if (!game) {
      newErrors.game = 'Game is required';
      hasError = true;
    }

    if (!image) {
      newErrors.image = 'Image is required';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log('Uploaded Image:', image); // Log the uploaded image when the form is submitted
      alert('Form submitted successfully!');
    }
  };

  const handleSubmitSubService = (event: React.FormEvent) => {
    event.preventDefault();

    let hasError = false;
    const newErrors = { service: '', subService: '', game: '', image: '' };

    if (!service) {
      newErrors.service = 'Service is required';
      hasError = true;
    }
    if (!subService) {
      newErrors.subService = 'Sub Service is required';
      hasError = true;
    }
    if (!game) {
      newErrors.game = 'Game is required';
      hasError = true;
    }
    if (!image) {
      newErrors.image = 'Image is required';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log('Uploaded Image:', image); // Log the uploaded image when the form is submitted
      alert('Form submitted successfully!');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setErrors((prev) => ({ ...prev, image: '' })); // Clear the image error message
    }
  };

  const handleUpdateImage = () => {
    document.getElementById('file-input')?.click(); // Trigger file input click
  };

  const handleDeleteImage = () => {
    setImage(null);
    setImagePreview(null);
    setErrors((prev) => ({ ...prev, image: '' })); // Clear the image error message when deleted
  };

  return (
    <>
      <Breadcrumb pageName="Game Service Section" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Service</h3>
            </div>
            <form onSubmit={handleSubmitService}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Service <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Service"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      if (e.target.value) setErrors((prev) => ({ ...prev, service: '' }));
                    }}
                  />
                  {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
                </div>

                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      Upload Image
                    </h3>
                  </div>
                  <div className="p-7">
                    <div className="mb-4 flex items-center gap-3">
                      {imagePreview ? (
                        <>
                          <img
                            src={imagePreview}
                            alt="Selected Preview"
                            className="w-20 h-20 object-cover"
                          />
                          <span className="flex gap-2.5">
                            <button
                              type="button"
                              className="text-sm hover:text-red-900 text-red-500"
                              onClick={handleDeleteImage}
                            >
                              Delete
                            </button>
                            <button
                              type="button"
                              className="text-sm hover:text-primary text-blue-600"
                              onClick={handleUpdateImage}
                            >
                              Update
                            </button>
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="mb-1.5 text-black dark:text-white">
                            Edit your photo
                          </span>
                          <button
                            type="button"
                            className="text-sm hover:text-primary text-blue-600"
                            onClick={handleUpdateImage}
                          >
                            Update
                          </button>
                        </>
                      )}
                    </div>

                    <div
                      id="FileUpload"
                      className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                    >
                      <input
                        id="file-input"
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                        onChange={handleImageChange}
                      />
                      <div className="flex flex-col items-center justify-center space-y-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                              fill="#3C50E0"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                              fill="#3C50E0"
                            />
                          </svg>
                        </span>
                        <p>
                          <span className="text-primary">Click to upload</span>
                        </p>
                        <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                        <p>(max, 800 X 800px)</p>
                      </div>
                    </div>
                    {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>} {/* Show image error */}
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">Sub Service</h3>
            </div>
            <form onSubmit={handleSubmitSubService}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Sub Service
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Sub Service"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={subService}
                    onChange={(e) => {
                      setSubService(e.target.value);
                      if (e.target.value) setErrors((prev) => ({ ...prev, subService: '' }));
                    }}
                  />
                  {errors.subService && <p className="text-red-500 text-sm">{errors.subService}</p>}
                </div>

                <div>
                  <label className="mb-2.5 block text-black dark:text-white">Games</label>
                  <input
                    type="text"
                    placeholder="Enter Game"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary mb-[10px]"
                    value={game}
                    onChange={(e) => {
                      setGame(e.target.value);
                      if (e.target.value) setErrors((prev) => ({ ...prev, game: '' }));
                    }}
                  />
                  {errors.game && <p className="text-red-500 text-sm">{errors.game}</p>}
                </div>

                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLayout;
