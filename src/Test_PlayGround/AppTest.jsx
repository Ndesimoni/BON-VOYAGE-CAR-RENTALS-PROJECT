import { motion } from "framer-motion";

const AppTest = () => {
  return (
    <div className="flex bg-red-500 items-center justify-center h-[100vh]">
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "180deg" }}
        transition={{ duration: 1 }}
        className="w-48 h-48 bg-blue-600 text-center "
      >
        testing
      </motion.div>
    </div>
  );
};

export default AppTest;
