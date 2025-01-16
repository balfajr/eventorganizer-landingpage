import { useState } from 'react';

export default function YearTabs() {
  const [activeYear, setActiveYear] = useState('2022');

  return (
    <div>
      <div className="flex space-x-4">
        <button
          className={`${activeYear === '2022' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveYear('2022')}
        >
          2022
        </button>
        <button
          className={`${activeYear === '2023' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveYear('2023')}
        >
          2023
        </button>
        <button
          className={`${activeYear === '2024' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveYear('2024')}
        >
          2024
        </button>
      </div>

      <div className="mt-4">
        {activeYear === '2022' && <div>Content for 2022</div>}
        {activeYear === '2023' && <div>Content for 2023</div>}
        {activeYear === '2024' && <div>Content for 2024</div>}
      </div>
    </div>
  );
}
