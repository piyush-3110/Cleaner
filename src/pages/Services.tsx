
import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceList from "@/components/services/ServiceList";
import CallToAction from "@/components/home/CallToAction";

const Services = () => {
  return (
    <Layout>
      <ServiceHero />
      <ServiceList />
      <CallToAction />
    </Layout>
  );
};

export default Services;
