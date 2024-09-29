import { UserData } from "../pages";
import useAuthStore from "../store";

type MessageProps = {
  message: string;
  time: string;
  userDetail?: UserData | null;
};

export default function Message({ message, time, userDetail }: MessageProps) {
  const { user } = useAuthStore();
  return (
    <div
      className={`${
        userDetail?.user.pk == user?.user.pk ? "self-end" : "self-start"
      } max-w-60 md:max-w-96 lg:max-w-[35rem] w-max mb-4`}
    >
      <div
        className={`${
          userDetail?.user.pk == user?.user.pk ? "bg-teal-800 " : "bg-[#3F3F46]"
        } message rounded-md p-2.5 text-wrap flex flex-wrap`}
      >
        <p className="break-words text-wrap">{message}</p>
      </div>
      <div className="flex items-center gap-4">
        <span>{time}</span>
        <span>{!!userDetail}</span>
      </div>
    </div>
  );
}
