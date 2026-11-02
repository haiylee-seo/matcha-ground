// src/pages/Order.jsx
export default function Order() {
    return (
      <>
        <p className="bg-[#FBF9F5] shadow-lg py-6 px-6">Order</p>
        <div className="bg-[#FBF9F5] shadow-lg py-6 px-6 flex justify-between gap-4">
            <div className="flex flex-col gap-4">
                <span>Menu</span>
            </div>
            <div className="flex flex-col gap-4">
                <span>Previous</span>
            </div>
            <div className="flex flex-col gap-4">
                <span>favourites</span>
            </div>
        </div>
      </>
    );
  }