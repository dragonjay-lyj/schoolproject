import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from "framer-motion";

const MyNotificationCard = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="">
  <section
    className="bg-center bg-cover bg-no-repeat py-4 md:py-14 lg:py-20"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)), url(https://res.cloudinary.com/dkhp3hucr/image/upload/v1711180495/dev/QmbqTYxzsd5Ao4B7BsbCx47NH5MHUmGZKXZCtx7pLZKndM_ubwfvp.avif)",
    }}
  >
    <div className="flex items-center justify-center flex-col">
      <div className="container mx-auto text-center max-w-md sm:max-w-lg md:max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-3 sm:mb-5"
        >
          想查询{" "}
          <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent font-bold">
            游戏、作业还是吐吐槽？
          </span>{" "}
          都可以！
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-[15px] sm:text-[16px] md:text-[18px]"
        >
          确保你是{" "}
          <span className="bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent font-semibold">
            邯郸科技职业学院的学子
          </span>{" "}
          让我们出发！
        </motion.p>
      </div>
    </div>
  </section>
</div>
  </motion.div>
  );
};

export default MyNotificationCard;
