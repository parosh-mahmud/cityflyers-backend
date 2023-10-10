





import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { setFlights } from '../../redux/actions/flightActions';
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
  SkeletonCircle,
} from "@chakra-ui/react";

const TestSearch = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    AdultQuantity: 1,
    ChildQuantity: 0,
    InfantQuantity: 0,
    EndUserIp: "103.124.251.147",
    JourneyType: "1",
    Segments: [
      {
        Origin: "DAC",
        Destination: "JSR",
        CabinClass: "1",
        DepartureDateTime: "2023-10-10",
      },
    ],
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSegments = [...formData.Segments];
    updatedSegments[index] = { ...updatedSegments[index], [name]: value };
    setFormData({ ...formData, Segments: updatedSegments });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRoZWNpdHlmbHllcnNAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy91c2VyZGF0YSI6IjIwOTc4fDIxNTMxfDEwMy4xMjQuMjUxLjE0NywxMDMuMTI0LjI1MS4xNDciLCJuYmYiOjE2OTY1NjM2NjAsImV4cCI6MTY5NzE2ODQ2MCwiaWF0IjoxNjk2NTYzNjYwLCJpc3MiOiJodHRwczovL2FwaS5mbHlodWIuY29tIiwiYXVkIjoiYXBpLmZseWh1Yi5jb20ifQ.wuORS6qsVQ6x8V_lALFXi8mmvA_s-3G8tVSbfUsswf0"; // Replace with your actual bearer token

    try {
      const response = await axios.post('https://api.flyhub.com/api/v1/AirSearch', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bearerToken}`
        }
      });

      dispatch(setFlights(response.data));
      history.push("/result");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormControl mb={4}>
        <FormLabel>Adult Quantity:</FormLabel>
        <Input
          type="number"
          name="AdultQuantity"
          value={formData.AdultQuantity}
          onChange={(e) => setFormData({ ...formData, AdultQuantity: e.target.value })}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Journey Type:</FormLabel>
        <Select
          name="JourneyType"
          value={formData.JourneyType}
          onChange={(e) => setFormData({ ...formData, JourneyType: e.target.value })}
        >
          <option value="1">One Way</option>
          <option value="2">Round Trip</option>
          {/* Add other journey types as needed */}
        </Select>
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Origin:</FormLabel>
        <Input
          name="Origin"
          value={formData.Segments[0].Origin}
          onChange={(e) => handleInputChange(e, 0)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Destination:</FormLabel>
        <Input
          name="Destination"
          value={formData.Segments[0].Destination}
          onChange={(e) => handleInputChange(e, 0)}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Departure Date Time:</FormLabel>
        <Input
          name="DepartureDateTime"
          type="date"
          value={formData.Segments[0].DepartureDateTime}
          onChange={(e) => handleInputChange(e, 0)}
        />
      </FormControl>
      
      <Button colorScheme="teal" type="submit" mt={4} isDisabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </Button>

      {loading && <SkeletonCircle mt={4} height="20px" />}
    </form>
  );
};

export default TestSearch;
