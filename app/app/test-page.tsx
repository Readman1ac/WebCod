export default function TestPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>TEST PAGE</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: '2', background: 'red', padding: '20px' }}>
          <h2>LEFT</h2>
        </div>
        <div style={{ flex: '1', background: 'blue', padding: '20px' }}>
          <h2>RIGHT</h2>
        </div>
      </div>
    </div>
  );
}
