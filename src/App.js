import { useRef } from "react";
import { useInView } from "framer-motion";
// รวม import ให้เป็นระเบียบ
import { _albums, _birthdayMessages, _messages } from "./assets/mock/mock"; 
import { useModal } from "./hooks/useModal";
import { Header, MessageSection } from "./components/ui";
import { MemoryZone } from "./components/common";
// 1. นำเข้า MusicPlayer ไว้ด้านบนสุด
import MusicPlayer from "./components/ui/MusicPlayer"; 

function App() {
    const { isModalVisible, currentImage, openModal, closeModal } = useModal();

    const messageRef = useRef(null);
    const memoryZoneRef = useRef(null);

    const isInViewMessageRef = useInView(messageRef, {
        once: true,
        amount: 0.2,
    });
    const isInViewMemoryZoneRef = useInView(memoryZoneRef, {
        once: true,
        amount: 0.2,
    });

    return (
        <div>
            {/* 2. วางปุ่มเล่นเพลงไว้ตรงนี้ (มันจะลอยอยู่มุมขวาล่างเอง) */}
            <MusicPlayer />

            <div className="aura" />
            <div className="flex justify-center h-auto overflow-y-auto aura">
                <div className="flex flex-col items-center max-w-[350px] py-12 gap-16 relative">
                    <Header
                        content={{
                            title: "สุขสันต์วันเกิด😘",
                            subtitle: "ยุกกี้กินแมวน้ำ รักแท้แพ้แอ๊ะแอ๋",
                        }}
                    />
                    <div className="w-[245px] h-[320px] rounded-lg shadow-lg mb-12">
                        <img
                            // ใช้ _albums[0] เพราะใน mock.js เราแก้ _albums เป็น Array ไปแล้ว
                            src={Array.isArray(_albums) ? _albums[0] : _albums}
                            alt="image_album"
                            onClick={() => openModal(Array.isArray(_albums) ? _albums[0] : _albums)}
                            loading="lazy"
                            className="border-none bg-[#a7e6f76b] rounded-lg cursor-pointer w-full h-full object-cover"
                        />
                    </div>

                    <MessageSection
                        data={_messages}
                        ref={messageRef}
                        isInView={isInViewMessageRef}
                    />
                    <MemoryZone
                        ref={memoryZoneRef}
                        isInView={isInViewMemoryZoneRef}
                        data={_birthdayMessages}
                    />
                    <div className={`pb-20 font-bold text-[#f78da4] text-3xl`}>
                        ยุกิรับประทานหมูกรอบ🤩
                    </div>
                </div>
            </div>

            {/* ส่วนของ Modal (คลิกขยายรูป) */}
            {isModalVisible && (
                <div className="modal show" onClick={closeModal}>
                    <div className="modal-content">
                        {currentImage && (
                            <img
                                src={currentImage}
                                alt="Preview"
                                className="modal-image"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
