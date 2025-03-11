import React, { useEffect, useState } from "react";
import {
  Flex,
  Modal,
  Button,
  Table,
  Form,
  Input,
  Select,
  DatePicker,
  message,
  Space,
  InputNumber,
} from "antd";
import { useApi } from "@/hooks";
import { PageHeader } from "@/components";
import dayjs from "dayjs";

const apiEndpoint = "/appointments";
const patientEndpoint = "/patient-profiles";
const serviceEndpoint = "/offered-services";

const AppointmentsList: React.FC = () => {
  const { $baseApi } = useApi();
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formModal, setFormModal] = useState<any>({ open: false, data: null });
  const [form] = Form.useForm();

  useEffect(() => {
    fetchAppointments();
    fetchPatients();
    fetchServices();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const { data } = await $baseApi.get(apiEndpoint);
      setAppointments(data);
    } catch (error) {
      message.error("Failed to load appointments");
    }
    setLoading(false);
  };

  const fetchPatients = async () => {
    try {
      const { data } = await $baseApi.get(patientEndpoint);
      setPatients(data);
    } catch (error) {
      message.error("Failed to load patients");
    }
  };

  const fetchServices = async () => {
    try {
      const { data } = await $baseApi.get(serviceEndpoint);
      setServices(data);
    } catch (error) {
      message.error("Failed to load services");
    }
  };

  const handleFormModal = (open: boolean, data: any = null) => {
    setFormModal({ open, data });
    if (open) {
      form.setFieldsValue(data ? { ...data, appointment_date: dayjs(data.appointment_date) } : {});
    } else {
      form.resetFields();
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await $baseApi.delete(`${apiEndpoint}/${id}`);
      message.success("Appointment deleted successfully");
      fetchAppointments();
    } catch (error) {
      message.error("Failed to delete appointment");
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      const payload = { ...values, appointment_date: values.appointment_date.format() };
      if (formModal.data) {
        await $baseApi.put(`${apiEndpoint}/${formModal.data.id}`, payload);
        message.success("Appointment updated successfully");
      } else {
        await $baseApi.post(apiEndpoint, payload);
        message.success("Appointment created successfully");
      }
      handleFormModal(false);
      fetchAppointments();
    } catch (error) {
      message.error("Failed to save appointment");
    }
  };

  const handleServiceChange = (value: number) => {
    // @ts-ignore
    const selectedService = services.find((s) => s.name === value);
    if (selectedService) {
      // @ts-ignore
      form.setFieldsValue({ fee: selectedService.price });
    }
  };

  const columns = [
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      render: (_: any, record: any) => (
        <p>
          {record.patient.first_name} {record.patient.last_name}
        </p>
      ),
    },
    { title: "Date", dataIndex: "appointment_date", key: "appointment_date" },
    { title: "Service", dataIndex: "service_type", key: "service_type" },
    { title: "Fee", dataIndex: "fee", key: "fee" },
    { title: "Payment Status", dataIndex: "payment_status", key: "payment_status" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Space>
          <Button onClick={() => handleFormModal(true, record)}>Edit</Button>
          <Button danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="h-full w-full">
      <Modal
        title={formModal.data ? "Edit Appointment" : "New Appointment"}
        open={formModal.open}
        onCancel={() => handleFormModal(false)}
        onOk={() => form.submit()}
        okText={formModal.data ? "Edit Appointment" : "Create Appointment"}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="patient_id"
            label="Patient"
            rules={[{ required: true, message: "Patient is required" }]}
          >
            <Select
              options={patients.map((p: any) => ({
                value: p.id,
                label: `${p.first_name} ${p.last_name}`,
              }))}
              placeholder="Select a patient"
              showSearch
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              }
            />
          </Form.Item>
          <Form.Item
            name="appointment_date"
            label="Appointment Date"
            rules={[{ required: true, message: "Date is required" }]}
          >
            <DatePicker showTime className="w-full" />
          </Form.Item>
          <Form.Item
            name="service_type"
            label="Service Type"
            rules={[{ required: true, message: "Service Type is required" }]}
          >
            <Select
              options={services.map((s: any) => ({ value: s.name, label: s.name }))}
              placeholder="Select a service"
              showSearch
              onChange={handleServiceChange}
              filterOption={(input, option) =>
                (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
              }
            />
          </Form.Item>
          <Form.Item name="fee" label="Fee">
            <InputNumber min={0} className="w-full" />
          </Form.Item>
          <Form.Item
            name="payment_status"
            label="Payment Status"
            rules={[{ required: true, message: "Payment status is required" }]}
          >
            <Select
              options={[
                { value: "unpaid", label: "Unpaid" },
                { value: "paid", label: "Paid" },
                { value: "pending", label: "Pending" },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Status is required" }]}
          >
            <Select
              options={[
                { value: "pending", label: "Pending" },
                { value: "confirmed", label: "Confirmed" },
                { value: "completed", label: "Completed" },
                { value: "canceled", label: "Canceled" },
              ]}
            />
          </Form.Item>
          <Form.Item name="notes" label="Notes">
            <Input.TextArea maxLength={500} />
          </Form.Item>
        </Form>
      </Modal>
      <PageHeader title="Appointments" subtitle="Manage patient appointments">
        <Flex justify="flex-end" gap="2">
          <Button type="primary" onClick={() => handleFormModal(true)}>
            New Appointment
          </Button>
        </Flex>
      </PageHeader>
      <Table
        dataSource={appointments}
        columns={columns}
        loading={loading}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
};

export default AppointmentsList;
