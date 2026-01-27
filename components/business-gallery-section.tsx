"use client";

import { useState, useCallback, useMemo } from "react";
import { BusinessConfig } from "@/lib/business-config";
import { KeywordConfig } from "@/lib/keywords-config";
import { Search, ChevronLeft, ChevronRight, X, Images } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessGallerySectionProps {
  business: BusinessConfig;
  keyword?: KeywordConfig;
  area?: string;
}

// Generate 50 demo images for each business type using picsum
const businessGalleryImages: Record<string, string[]> = {
  "interior-designers": [
    "1618221195710-dd6b41faaea6", "1600210492486-724fe5c67fb0", "1616486338812-3dadae4b4ace",
    "1586023492125-27b2c045efd7", "1600607687939-ce8a6c25118c", "1618219908412-a29a1bb7b86e",
    "1631679706909-1844bbd07221", "1600566753086-00f18fb6b3ea", "1600585154340-be6161a56a0c",
    "1556909172-54557c7e4fb7", "1555041469-a586c61ea9bc", "1600596542815-ffad4c1539a9",
    "1616137466211-f939a420be84", "1600607687920-4e03f0e6f0b3", "1618219740975-db2b1b6b2dcd",
    "1560448204-e02f11c3d0e2", "1565538810643-b5bdb714032a", "1600573472550-8090b5e0745e",
    "1600585154526-990dced4db0d", "1600566753190-17f0baa2a6c3", "1560185127-6a4b2ad4e0e5",
    "1600585154526-990dced4db0d", "1618219908412-a29a1bb7b86e", "1631679706909-1844bbd07221",
    "1600210492486-724fe5c67fb0", "1616486338812-3dadae4b4ace", "1586023492125-27b2c045efd7",
    "1600607687939-ce8a6c25118c", "1631679706909-1844bbd07221", "1600566753086-00f18fb6b3ea",
    "1556909172-54557c7e4fb7", "1555041469-a586c61ea9bc", "1600596542815-ffad4c1539a9",
    "1616137466211-f939a420be84", "1600607687920-4e03f0e6f0b3", "1618219740975-db2b1b6b2dcd",
    "1560448204-e02f11c3d0e2", "1565538810643-b5bdb714032a", "1600573472550-8090b5e0745e",
    "1600585154526-990dced4db0d", "1600566753190-17f0baa2a6c3", "1560185127-6a4b2ad4e0e5",
    "1618221195710-dd6b41faaea6", "1600210492486-724fe5c67fb0", "1616486338812-3dadae4b4ace",
    "1586023492125-27b2c045efd7", "1600607687939-ce8a6c25118c", "1618219908412-a29a1bb7b86e",
    "1631679706909-1844bbd07221", "1600566753086-00f18fb6b3ea",
  ],
  "real-estate": [
    "1560518883-ce09059eeffa", "1600596542815-ffad4c1539a9", "1600585154340-be6161a56a0c",
    "1582268611958-ebfd161ef9cf", "1512917774080-9991f1c4c750", "1564013799919-ab600027ffc6",
    "1600607687939-ce8a6c25118c", "1600047509807-ba8f99d2cdde", "1602343168117-bb8ffe3e2e9f",
    "1613490493576-7fde63acd811", "1605276374104-dee2a0ed3cd6", "1600566753086-00f18fb6b3ea",
    "1560448204-e02f11c3d0e2", "1565538810643-b5bdb714032a", "1600573472550-8090b5e0745e",
    "1600585154526-990dced4db0d", "1600566753190-17f0baa2a6c3", "1560185127-6a4b2ad4e0e5",
    "1560518883-ce09059eeffa", "1600596542815-ffad4c1539a9", "1600585154340-be6161a56a0c",
    "1582268611958-ebfd161ef9cf", "1512917774080-9991f1c4c750", "1564013799919-ab600027ffc6",
    "1600607687939-ce8a6c25118c", "1600047509807-ba8f99d2cdde", "1602343168117-bb8ffe3e2e9f",
    "1613490493576-7fde63acd811", "1605276374104-dee2a0ed3cd6", "1600566753086-00f18fb6b3ea",
    "1560518883-ce09059eeffa", "1600596542815-ffad4c1539a9", "1600585154340-be6161a56a0c",
    "1582268611958-ebfd161ef9cf", "1512917774080-9991f1c4c750", "1564013799919-ab600027ffc6",
    "1600607687939-ce8a6c25118c", "1600047509807-ba8f99d2cdde", "1602343168117-bb8ffe3e2e9f",
    "1613490493576-7fde63acd811", "1605276374104-dee2a0ed3cd6", "1600566753086-00f18fb6b3ea",
    "1560518883-ce09059eeffa", "1600596542815-ffad4c1539a9", "1600585154340-be6161a56a0c",
    "1582268611958-ebfd161ef9cf", "1512917774080-9991f1c4c750", "1564013799919-ab600027ffc6",
    "1600607687939-ce8a6c25118c", "1600047509807-ba8f99d2cdde",
  ],
  "solar-installation": [
    // Unique Solar Panel Images from Unsplash - diverse collection
    "1509391366360-2e959784a276", // Solar panels field
    "1508514177221-188b1cf16e9d", // Solar panels on roof
    "1559302504-64aae6ca6b6d", // Solar farm aerial
    "1497440001374-f26997328c1b", // Solar installation
    "1548098343-8c8b6abe8ebf", // Solar panel close-up
    "1558618666-fcd25c85cd64", // Workers installing solar
    "1566093097221-ac2335b09e70", // Rooftop solar panels
    "1624397640148-949b1732bb0a", // Residential solar
    "1613665813446-82a78c468a1d", // Solar on modern house
    "1509391111738-29ae7c3bb1b2", // Solar farm rows
    "1581093588401-fbb62a02f120", // Solar technician
    "1473341304170-971dccb5ac1e", // Large solar array
    "1579547621869-0ddb5f237392", // Solar panels sunset
    "1584276433295-4b49a252e5ee", // Commercial solar
    "1595437193398-f24279553f4f", // Industrial solar
    "1559028006-1e44b15ed476", // Solar home
    "1585060835763-d9b6f87fc61e", // Solar panel detail
    "1604594849809-dfedbc827105", // Solar installer
    "1536767655539-dcc2aef4c00f", // Solar manufacturing
    "1610021684483-b06bf6f68154", // Modern solar system
    "1593642702821-c8da6771f0c6", // Rooftop installation
    "1600493505591-36ff8af54f8a", // Solar panels blue sky
    "1593642634315-48f5414c3ad9", // Solar power station
    "1508615039623-a25605d2b022", // Solar array
    "1593642634524-b40b5baae6bb", // Home solar system
    "1600585154363-67eb9e2e2099", // Solar installation work
    "1600573472592-401b489a3cdc", // Residential rooftop
    "1593642634402-b0eb5e2ede76", // Solar field view
    "1593642634443-44adaa06623a", // Panel installation
    "1508615263227-c5d58c1e5821", // Solar close-up
    "1548097700-48db7b6f5f8e", // Solar energy
    "1597149242405-f3c1f74c5c3e", // Solar roof
    "1620714223084-8fcacc6dfd8d", // Modern solar
    "1578662996442-48f60103fc96", // Solar power plant
    "1559302612-d8b3f8e0e5e5", // Worker on roof
    "1600607687644-aac4c3eac7f4", // Rooftop solar view
    "1597141027867-7e2e5e8f50a4", // Commercial roof solar
    "1572981779307-38b8cabb2407", // Green energy
    "1509390144018-eeaf65052242", // Solar panel array
    "1521618755572-156ae0cdd74d", // Sunset solar
    "1605989165998-26e00ebeee08", // Home solar panels
    "1595165205613-54d35fb3e254", // Solar on building
    "1600566753190-17f0baa2a6c3", // Power station
    "1560185127-6a4b2ad4e0e5", // Array field
    "1600596542815-ffad4c1539a9", // Roof panels
    "1600585154340-be6161a56a0c", // Installation
    "1600607687920-4e03f0e6f0b3", // Farm solar
    "1618221195710-dd6b41faaea6", // Field solar
    "1618219740975-db2b1b6b2dcd", // Roof installation
    "1600573472550-8090b5e0745e", // Solar system
  ],
  "skin-hair": [
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937", "1629909613654-28e377c37b09",
    "1570172619644-dfd03ed5d881", "1516975080664-ed2fc6a32937",
  ],
  "lawyer": [
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744", "1450101499163-c8848c66ca85",
    "1589829545856-d10d557cf95f", "1505664194779-8beaceb93744",
  ],
  "dentists": [
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5", "1598256989800-fe5f95da9787",
    "1606811841689-23dfddce3e95", "1588776814546-1ffcf47267a5",
  ],
  "home-automation": [
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99", "1556909114-f6e7ad7d3136",
    "1558002038-1055907df827", "1585503418537-88331351ad99",
  ],
  "security-cctv": [
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35", "1558618666-fcd25c85cd64",
    "1557597774-9d273605dfa9", "1617005082133-548c4dd27f35",
  ],
  "wedding-planners": [
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622", "1464366400600-7168b8af9bc3",
    "1519741497674-611481863552", "1511795409834-ef04bbd61622",
  ],
  "study-abroad": [
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f", "1562774053-701939374585",
    "1523050854058-8df90110c9f1", "1541339907198-e08756dedf3f",
  ],
};

export function BusinessGallerySection({ business, keyword, area }: BusinessGallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState(12);
  
  const imageIds = businessGalleryImages[business.slug] || businessGalleryImages["interior-designers"];
  const keywordText = keyword?.keyword || business.name;
  const areaText = area?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || "Vadodara";
  const isMainVadodara = !area || area === "solar-installation-in-vadodara" || areaText === "Vadodara";
  const locationText = isMainVadodara ? "Vadodara" : `${areaText}, Vadodara`;

  const images = useMemo(() => 
    imageIds.map((id, index) => ({
      id: index + 1,
      url: `https://images.unsplash.com/photo-${id}?w=600&h=400&fit=crop`,
      fullUrl: `https://images.unsplash.com/photo-${id}?w=1200&h=800&fit=crop`,
      alt: `${keywordText} ${areaText} - Image ${index + 1}`,
      title: `${keywordText} in ${areaText} - Project ${index + 1}`,
    })),
  [imageIds, keywordText, areaText]);

  const loadMore = useCallback(() => {
    setVisibleImages((prev) => Math.min(prev + 12, images.length));
  }, [images.length]);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % images.length : 0);
  const prevImage = () => setSelectedImage((prev) => prev !== null ? (prev - 1 + images.length) % images.length : 0);

  const gradientClass = business.colors.gradient;

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-1 rounded-full text-white text-sm font-semibold mb-4",
            gradientClass
          )}>
            <Images className="w-4 h-4" />
            <span>Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our {keywordText} Portfolio in {areaText}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of {keywordText.toLowerCase()} projects completed across {locationText}.
            Each project showcases our commitment to quality {keywordText.toLowerCase()} services.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(0, visibleImages).map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <Search className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium truncate">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleImages < images.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className={cn(
                "px-8 py-3 rounded-full text-white font-semibold transition-all hover:scale-105",
                gradientClass
              )}
            >
              Load More ({images.length - visibleImages} remaining)
            </button>
          </div>
        )}

        {/* SEO Text with Keyword Density */}
        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Best {keywordText} Projects in {locationText}
          </h3>
          <p className="text-gray-600 mb-3">
            Our gallery showcases the finest {keywordText.toLowerCase()} work we have completed in {locationText}. 
            As the leading {keywordText.toLowerCase()} provider in {isMainVadodara ? "Vadodara" : areaText}, we take pride in delivering exceptional 
            results for our clients. Browse through {images.length}+ {keywordText.toLowerCase()} images from our 
            portfolio in {locationText}.
          </p>
          <p className="text-gray-500 text-sm">
            Showing {Math.min(visibleImages, images.length)} of {images.length} {keywordText.toLowerCase()} images from {areaText}
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={images[selectedImage].fullUrl}
              alt={images[selectedImage].alt}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">{images[selectedImage].title}</p>
              <p className="text-white/60 text-sm mt-1">{selectedImage + 1} / {images.length}</p>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      )}
    </section>
  );
}
