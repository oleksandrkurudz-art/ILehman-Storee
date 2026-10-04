import './Filters.scss'
function Filters({ filters, setFilters, groups, startFilters }) {
  function toggleFilter(nameFilter, value) {
    setFilters((prev) => {
      const selected = prev[nameFilter] ?? [];

      return {
        ...prev,
        [nameFilter]: selected.includes(value)
          ? selected.filter((item) => item !== value)
          : [...selected, value],
      };
    });
  }
   return (
  <aside className="filters">
    <h2 className="filters__title">Фільтри</h2>
    {groups.map((group) => (
      <div
        className="filters__section"
        key={group.id}
      >
        <h3 className="filters__subtitle">
          {group.title}
        </h3>

        {group.options.map((option) => (
          <label
            className="filters__option"
            key={option.value}
          >
            <input
              type="checkbox"
              checked={(filters[group.id] ?? []).includes(option.value)}
              onChange={() =>
                toggleFilter(group.id, option.value)
              }
            />
            {option.label}
          </label>

          
        ))}
       
      </div>
    ))}
     <button 
          type='button'
          className='filters__reset'
          onClick={() => setFilters(startFilters)}>
            Скинути фільтри 
            </button>
    
  </aside>
)
}

export default Filters;
