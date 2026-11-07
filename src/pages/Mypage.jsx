import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function Mypage() {
  // 알림 설정 상태 관리 (true: 켜짐, false: 꺼짐)
  const [emailNotif, setEmailNotif] = useState(true);
  const [inboxNotif, setInboxNotif] = useState(false);

  return (
    <>
      <section className="p-4">
        <p className="text-lg font-bold">Username</p>
        <p className="text-sm">Useremail</p>
      </section>
      <ul className="flex flex-col gap-4 px-4">
        <li>
          <p className="text-lg font-bold">Account</p>
          <ul className="text-sm">
            <li className="flex items-center justify-between py-2 mb-2">
              <p>personal info</p>
              <ChevronRight className="w-4 h-4" />
            </li>
            <li>
              <div className="flex items-center justify-between py-2 mb-2">
                <p>change password</p>
                <ChevronRight className="w-4 h-4" />
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between py-2 mb-2">
                <p>payment methods</p>
                <ChevronRight className="w-4 h-4" />
              </div>
            </li>
          </ul>
        </li>
        <li>
          <p className="text-lg font-bold">Notification Preference</p>
          <ul className="text-sm">
            <li className="flex items-center justify-between py-2 mb-2">
              <span>email</span>
              {/* <button>On/Off</button> */}
              <button
                type="button"
                onClick={() => setEmailNotif(!emailNotif)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                  emailNotif ? "bg-[#165D31]" : "bg-[#D1D5DB]"
                }`}
              >
                {/* 안쪽 동그라미 (토글 스위치 핸들) */}
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    emailNotif ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </li>
            <li className="flex items-center justify-between py-2 mb-2">
              <span>Inbox messages</span>
              <button
                type="button"
                onClick={() => setInboxNotif(!inboxNotif)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                  inboxNotif ? "bg-[#165D31]" : "bg-[#D1D5DB]"
                }`}
              >
                {/* 안쪽 동그라미 (토글 스위치 핸들) */}
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                    inboxNotif ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </li>
          </ul>
        </li>
        <li>
          <p className="text-lg font-bold">Help & Policies</p>
          <ul className="text-sm">
            <li className="flex items-center justify-between py-2 mb-2">
              <span>Help</span>
              <ChevronRight className="w-4 h-4" />
            </li>
            <li>
              <div className="flex items-center justify-between py-2 mb-2">
                <span>Terms of Use</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between py-2 mb-2">
                <span>Privacy Statement</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between py-2 mb-2">
                <span>Delete Account</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </li>
          </ul>
        </li>
        <li>
          <button className="w-full py-2 rounded-full border border-[#165D31] text-sm font-medium text-[#165D31]">
            Sign Out
          </button>
        </li>
      </ul>
    </>
  );
}
