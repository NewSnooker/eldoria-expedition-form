"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { useLanguage } from "@/lib/language-context";
import {
  expeditionFormSchema,
  type ExpeditionFormData,
} from "@/lib/schema";
import {
  AlertCircle,
  ArrowLeft,
  RotateCcw,
  Send,
  FileText,
  X,
  Upload,
} from "lucide-react";

export default function ExpeditionForm() {
  const { t, language } = useLanguage();
  const formT = t.form;

  const [filePreview, setFilePreview] = useState<{ name: string; size: string } | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<ExpeditionFormData>({
    resolver: zodResolver(expeditionFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      contactNumber: "",
      dob: "",
      experience: formT.experienceOptions[0],
      roles: [],
      region: "",
      desiredSalary: 700,
      contactMethod: "Email",
      passportFileName: "",
      additionalComments: "",
      termsAccepted: false,
    },
  });

  const desiredSalaryValue = watch("desiredSalary") ?? 700;

  // Validate and handle file
  const processFile = (file: File) => {
    const ext = file.name.split(".").pop()?.toLowerCase();
    const validExtensions = ["jpg", "jpeg", "png", "pdf"];

    if (!ext || !validExtensions.includes(ext)) {
      const errMsg = language === "th"
        ? `ไม่อนุญาตให้อัปโหลดไฟล์ .${ext || "unknown"} (ยอมรับเฉพาะ JPG, PNG, PDF เท่านั้น)`
        : `File type .${ext || "unknown"} is not allowed (Accepted formats: JPG, PNG, PDF only)`;
      setFileError(errMsg);
      setError("passportFileName", { type: "manual", message: errMsg });
      toast.error(errMsg);
      setFilePreview(null);
      setValue("passportFileName", "", { shouldValidate: true });
      setValue("passportFileSize", 0);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      const errMsg = language === "th"
        ? "ขนาดไฟล์เกิน 5 MB กรุณาเลือกไฟล์ที่มีขนาดเล็กลง"
        : "File size exceeds 5 MB. Please select a smaller file.";
      setFileError(errMsg);
      setError("passportFileName", { type: "manual", message: errMsg });
      toast.error(errMsg);
      setFilePreview(null);
      setValue("passportFileName", "", { shouldValidate: true });
      setValue("passportFileSize", 0);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // Valid file
    setFileError(null);
    clearErrors("passportFileName");
    const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
    setFilePreview({ name: file.name, size: `${sizeInMB} MB` });
    setValue("passportFileName", file.name, { shouldValidate: true });
    setValue("passportFileSize", file.size);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleRemoveFile = () => {
    setFilePreview(null);
    setFileError(null);
    setValue("passportFileName", "", { shouldValidate: true });
    setValue("passportFileSize", 0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));

    try {
      confetti({
        particleCount: 50,
        spread: 55,
        origin: { y: 0.7 },
      });
    } catch {
      // ignore
    }

    toast.success(formT.submitSuccessTitle, {
      description: formT.submitSuccessDesc,
      duration: 4000,
    });
  };

  const handleClearForm = () => {
    reset({
      fullName: "",
      email: "",
      contactNumber: "",
      dob: "",
      experience: formT.experienceOptions[0],
      roles: [],
      region: "",
      desiredSalary: 700,
      contactMethod: "Email",
      passportFileName: "",
      additionalComments: "",
      termsAccepted: false,
    });
    setFilePreview(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    toast.info(formT.clearSuccessTitle, {
      description: formT.clearSuccessDesc,
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 pt-24 text-stone-800 dark:text-stone-200">
      {/* Back Link */}
      <div className="mb-5">
        <Link
          href="/requirements"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-amber-800 dark:text-stone-400 dark:hover:text-amber-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{formT.backToRequirements}</span>
        </Link>
      </div>

      {/* Form Container */}
      <div className="bg-white dark:bg-[#1f1e1c] border border-stone-300/80 dark:border-stone-800 rounded-2xl p-6 sm:p-10 shadow-sm space-y-7">
        {/* Title */}
        <div className="space-y-1 pb-3 border-b border-stone-200 dark:border-stone-800">
          <h1 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white tracking-tight">
            {formT.title}
          </h1>
          <p className="text-xs text-stone-500 dark:text-stone-400">
            {formT.subtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          {/* 1. Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="fullName" className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-white block">
              {formT.fullNameLabel} <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder={formT.fullNamePlaceholder}
              {...register("fullName")}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? "border-red-400 bg-red-50/20 focus:ring-red-200 dark:bg-red-950/20"
                  : "border-stone-300 dark:border-stone-700 bg-stone-50/40 dark:bg-stone-800/60 focus:border-stone-700 focus:ring-stone-200"
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.fullName.message}</span>
              </p>
            )}
          </div>

          {/* 2. Email */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-white block">
              {formT.emailLabel} <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder={formT.emailPlaceholder}
              {...register("email")}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-400 bg-red-50/20 focus:ring-red-200 dark:bg-red-950/20"
                  : "border-stone-300 dark:border-stone-700 bg-stone-50/40 dark:bg-stone-800/60 focus:border-stone-700 focus:ring-stone-200"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.email.message}</span>
              </p>
            )}
          </div>

          {/* 3. Contact Number */}
          <div className="space-y-1.5">
            <label htmlFor="contactNumber" className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-white block">
              {formT.contactNumberLabel} <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              id="contactNumber"
              type="tel"
              placeholder={formT.contactNumberPlaceholder}
              {...register("contactNumber")}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.contactNumber
                  ? "border-red-400 bg-red-50/20 focus:ring-red-200 dark:bg-red-950/20"
                  : "border-stone-300 dark:border-stone-700 bg-stone-50/40 dark:bg-stone-800/60 focus:border-stone-700 focus:ring-stone-200"
              }`}
            />
            {errors.contactNumber && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.contactNumber.message}</span>
              </p>
            )}
          </div>

          {/* 4. Date of Birth */}
          <div className="space-y-1.5">
            <label htmlFor="dob" className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-white block">
              {formT.dobLabel} <span className="text-red-500 font-bold">*</span>
            </label>
            <input
              id="dob"
              type="date"
              {...register("dob")}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.dob
                  ? "border-red-400 bg-red-50/20 focus:ring-red-200 dark:bg-red-950/20"
                  : "border-stone-300 dark:border-stone-700 bg-stone-50/40 dark:bg-stone-800/60 focus:border-stone-700 focus:ring-stone-200"
              }`}
            />
            <p className="text-[11px] text-stone-500 dark:text-stone-400">
              {formT.dobHint}
            </p>
            {errors.dob && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.dob.message}</span>
              </p>
            )}
          </div>

          {/* 5. Archaeology Experience */}
          <div className="space-y-1.5">
            <label htmlFor="experience" className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-white block">
              {formT.experienceLabel} <span className="text-red-500 font-bold">*</span>
            </label>
            <select
              id="experience"
              {...register("experience")}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50/40 dark:bg-stone-800/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:border-stone-700 cursor-pointer"
            >
              {formT.experienceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.experience && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.experience.message}</span>
              </p>
            )}
          </div>

          {/* 6. Preferred Role (Checkboxes stacked) */}
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-white block">
              {formT.roleLabel} <span className="text-red-500 font-bold">*</span>
            </label>

            <Controller
              name="roles"
              control={control}
              render={({ field }) => (
                <div className="space-y-2 pt-0.5">
                  {formT.roles.map((role) => {
                    const isChecked = field.value?.includes(role.value);
                    return (
                      <label
                        key={role.value}
                        className="flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm text-stone-700 dark:text-stone-300 select-none"
                      >
                        <input
                          type="checkbox"
                          value={role.value}
                          checked={isChecked}
                          onChange={(e) => {
                            const current = field.value || [];
                            if (e.target.checked) {
                              field.onChange([...current, role.value]);
                            } else {
                              field.onChange(current.filter((v) => v !== role.value));
                            }
                          }}
                          className="w-4 h-4 rounded border-stone-300 text-stone-900 focus:ring-stone-500"
                        />
                        <span>{role.label}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            />
            {errors.roles && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.roles.message}</span>
              </p>
            )}
          </div>

          {/* 7. Preferred Expedition Region (Radios stacked) */}
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-white block">
              {formT.regionLabel} <span className="text-red-500 font-bold">*</span>
            </label>

            <Controller
              name="region"
              control={control}
              render={({ field }) => (
                <div className="space-y-2 pt-0.5">
                  {formT.regions.map((reg) => (
                    <label
                      key={reg.value}
                      className="flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm text-stone-700 dark:text-stone-300 select-none"
                    >
                      <input
                        type="radio"
                        name="region"
                        value={reg.value}
                        checked={field.value === reg.value}
                        onChange={() => field.onChange(reg.value)}
                        className="w-4 h-4 border-stone-300 text-stone-900 focus:ring-stone-500"
                      />
                      <span>{reg.label}</span>
                    </label>
                  ))}
                </div>
              )}
            />
            {errors.region && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.region.message}</span>
              </p>
            )}
          </div>

          {/* 8. Desired Salary Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="desiredSalary" className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-white">
                {formT.salaryLabel} <span className="font-bold text-amber-800 dark:text-amber-400">{desiredSalaryValue}</span>
              </label>
            </div>
            <input
              id="desiredSalary"
              type="range"
              min="0"
              max="1700"
              step="10"
              {...register("desiredSalary", { valueAsNumber: true })}
              className="w-full h-2 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-stone-800 dark:accent-stone-200"
            />
            <div className="flex justify-between text-[11px] text-stone-400">
              <span>$0</span>
              <span>$700</span>
              <span>$1700</span>
            </div>
            {errors.desiredSalary && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.desiredSalary.message}</span>
              </p>
            )}
          </div>

          {/* 9. Preferred Contact Method (Radios) */}
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-white block">
              {formT.contactMethodLabel}
            </label>

            <Controller
              name="contactMethod"
              control={control}
              render={({ field }) => (
                <div className="flex flex-wrap gap-4 pt-0.5">
                  {formT.contactMethods.map((method) => (
                    <label
                      key={method.value}
                      className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm text-stone-700 dark:text-stone-300 select-none"
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method.value}
                        checked={field.value === method.value}
                        onChange={() => field.onChange(method.value)}
                        className="w-4 h-4 border-stone-300 text-stone-900 focus:ring-stone-500"
                      />
                      <span>{method.label}</span>
                    </label>
                  ))}
                </div>
              )}
            />
          </div>

          {/* 10. Upload Passport/ID */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-white block">
              {formT.passportLabel} <span className="text-red-500 font-bold">*</span>
            </label>

            <input
              ref={fileInputRef}
              type="file"
              id="passport"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={handleFileChange}
              className="block w-full text-xs text-stone-500 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-stone-200 file:text-stone-800 hover:file:bg-stone-300 dark:file:bg-stone-800 dark:file:text-stone-200 cursor-pointer border border-stone-300 dark:border-stone-700 rounded-lg p-1.5 bg-stone-50/40 dark:bg-stone-800/60"
            />

            {filePreview && (
              <div className="text-xs text-stone-600 dark:text-stone-400 flex items-center justify-between pt-1">
                <span>{formT.fileSelected} <strong>{filePreview.name}</strong> ({filePreview.size})</span>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="text-red-500 hover:underline text-[11px]"
                >
                  {formT.removeFile}
                </button>
              </div>
            )}

            {(errors.passportFileName || fileError) && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{fileError || errors.passportFileName?.message}</span>
              </p>
            )}
          </div>

          {/* 11. Additional Comments */}
          <div className="space-y-1.5">
            <label htmlFor="comments" className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-white block">
              {formT.commentsLabel}
            </label>
            <textarea
              id="comments"
              rows={4}
              placeholder={formT.commentsPlaceholder}
              {...register("additionalComments")}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-50/40 dark:bg-stone-800/60 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:border-stone-700"
            />
            {errors.additionalComments && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.additionalComments.message}</span>
              </p>
            )}
          </div>

          {/* 12. Terms and Conditions with Hover Tooltip */}
          <div className="space-y-1.5 pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                {...register("termsAccepted")}
                className="mt-0.5 w-4 h-4 rounded border-stone-300 text-stone-900 focus:ring-stone-500"
              />
              <span className="text-xs sm:text-sm text-stone-800 dark:text-stone-200">
                {formT.termsLabel}{" "}
                <span
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  className="font-bold underline text-stone-900 dark:text-stone-100 relative inline-block cursor-help"
                >
                  {formT.termsInteractive}
                  {showTooltip && (
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2.5 bg-stone-900 text-white text-[11px] rounded-lg shadow-xl z-50 pointer-events-none border border-stone-700">
                      {formT.termsTooltip}
                    </span>
                  )}
                </span>
                <span className="text-red-500 font-bold ml-1">*</span>
              </span>
            </label>
            {errors.termsAccepted && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.termsAccepted.message}</span>
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4 border-t border-stone-200 dark:border-stone-800">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm transition-all dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white disabled:opacity-50"
            >
              {isSubmitting ? formT.submitting : formT.submitButton}
            </button>

            <button
              type="button"
              onClick={handleClearForm}
              className="px-5 py-2.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 font-semibold text-xs sm:text-sm transition-all"
            >
              {formT.clearButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
