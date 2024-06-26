import { FaCommentDots } from 'react-icons/fa';

const number = 'https://wa.me/+9779867154844';

const WhatsAppButton = () => {
  return (
    <a href={number} target="_blank" className="fixed bottom-5 right-5">
      <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg transition-transform transform hover:scale-110 animate-pulse">
        <FaCommentDots className="text-white text-3xl" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
