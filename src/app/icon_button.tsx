export function IconButton({
  icon,
  text,
  callBack,
}: {
  icon: null;
  text: string;
  callBack: () => void;
}) {
  return (
    <div className="flex flex-col">
      <button
        className={`bg-green-300 h-14 w-14 rounded-xl text-center`}
        onClick={callBack}
      />
      {text}
    </div>
  );
}
