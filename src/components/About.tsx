export default function About() {
  return (
    <div className="flex flex-row justify-center">
        <img src="/images/profile.png" alt="Profile" className="w-[20vw] h-auto rounded-3xl rounded-3xl" />
        <div className="flex flex-col items-start ml-50">
            <h1 className="text-[64px] font-bold text-center mt-4">Hey!</h1>
            <p className="text-center mt-2">Im' Raphael Soares Casado, a Computer Engineering Student & Developer</p>
        </div>
    </div>
  );
}