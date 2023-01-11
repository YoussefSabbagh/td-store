export const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={` w-3/4 flexC  mx-auto rounded py-2 uppercase text-myWhite font-medium ${
      error
        ? 'bg-myGray'
        : 'bg-myBlack hover:bg-myWhite hover:text-myBlack border border-transparent hover:border hover:border-myBlack'
    }`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? 'Processing...' : children}
  </button>
);
