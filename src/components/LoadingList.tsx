interface CellSize {
  percentage: number;
  height?: number;
}

interface LoadingListProps {
  cellSizes: CellSize[];
}

const LoadingList = ({ cellSizes }: LoadingListProps) => {
  return (
    <div className="flex flex-row flex-wrap w-[400px] max-h-[400px] animate-pulse">
      {cellSizes.map((size, index) => {
        const { height = 10, percentage = 50 } = size;
        return (
          <div
            key={index}
            style={{
              height: `${height}px`,
              width: `${percentage}%`,
              marginTop: index > 0 ? "10px" : "0px",
            }}
            className="bg-slate-700 rounded"
          />
        );
      })}
    </div>
  );
};

export default LoadingList;
