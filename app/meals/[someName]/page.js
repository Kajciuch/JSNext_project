export default function MealDetailsPage({ params }) {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Meal details</h1>
        <p style={{ color: 'white', textAlign: 'center' }}>Nazwa posiłku z URL: {params.someName}</p>
      </main>
    );
  }
  