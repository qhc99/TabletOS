export function Icon({ data }: { data: number }) {
  return (
    <div className={`bg-green-300 h-14 w-14 rounded-xl text-center`}>
      {data}
    </div>
  );
}
