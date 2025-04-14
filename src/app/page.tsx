import { Grid, Typography, Box } from "@mui/material";
import FilterSidebar from "@/components/filter-sidebar";
import ProductCard from "@/components/product-card";

const sampleData = [
  {
    id: "1",
    title: "Latitude 3510 Intel Core i5, 10th Gen, 16GB RAM, 256GB SSD",
    condition: "Used",
    lotSize: "11 items / 165 Lbs",
    brand: "Dell",
    price: 819.0,
    endsIn: "1d 7h",
    image: "/sample-1.png",
    bids: 5,
  },
  {
    id: "2",
    title: 'MacBook Pro M1 13", 8GB RAM, 256GB SSD',
    condition: "Used",
    lotSize: "6 items / 90 Lbs",
    brand: "Apple",
    price: 1299.0,
    endsIn: "2d 4h",
    image: "/sample-2.png",
    bids: 5,
  },
  {
    id: "3",
    title: "HP EliteBook 840 G6, 16GB, 512GB SSD",
    condition: "Refurbished",
    lotSize: "4 items / 80 Lbs",
    brand: "HP",
    price: 699.0,
    endsIn: "3d 12h",
    image: "/sample-3.png",
    bids: 2,
  },
  {
    id: "4",
    title: "Lenovo ThinkPad X1 Carbon Gen 8",
    condition: "Used",
    lotSize: "9 items / 120 Lbs",
    brand: "Lenovo",
    price: 999.0,
    endsIn: "1d 3h",
    image: "/sample-4.png",
    bids: 9,
  },
];

export default function Home() {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Active Auctions
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 3 }}>
          <FilterSidebar />
        </Grid>

        <Grid size={{ xs: 12, md: 9 }}>
          <Grid container spacing={3}>
            {sampleData.map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
